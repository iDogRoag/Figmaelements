import React from 'react';
import { createRoot, Root } from 'react-dom/client';
import RegistrationFlow from './app/RegistrationFlow';
import { ParentApp } from './app/components/parent/ParentApp';
import { AdminApp } from './app/components/admin/AdminApp';
import styles from './styles/index.css?inline'; // Includes raw CSS string for Shadow DOM

// Helper function to wrap React components in Standard Web Components
function createWixCustomElement(Component: React.FC, componentName: string) {
  return class extends HTMLElement {
    private root: Root | null = null;
    private mountPoint: HTMLDivElement | null = null;
    private relayEvents?: EventListener;

    static get observedAttributes() {
      return ['rpc-response'];
    }

    attributeChangedCallback(_name: string, _oldValue: string | null, newValue: string | null) {
      if (!newValue) return;
      try {
        const parsed = JSON.parse(newValue);
        window.dispatchEvent(
          new CustomEvent(`wix:response:${parsed.requestId}`, { detail: parsed })
        );
      } catch {
        console.error(`[TNHP:${componentName}] Failed to parse rpc-response attribute:`, newValue);
      }
    }

    connectedCallback() {
      console.log(`[TNHP:${componentName}] Custom Element connected to DOM.`);

      // Ensure the custom element itself is visible and occupies space
      this.style.display = 'block';
      this.style.width = '100%';
      this.style.minHeight = '100px'; 
      this.style.border = 'none'; // Clear debug border

      if (!this.mountPoint) {
        // Create a mount point and stretch it to fill the host
        this.mountPoint = document.createElement('div');
        this.mountPoint.style.width = '100%';
        this.mountPoint.style.height = '100%';
        this.mountPoint.className = 'tnhp-root-container';
        
        // Create Shadow DOM to isolate styles from Wix site styles
        const shadow = this.attachShadow({ mode: 'open' });
        
        // Inject Tailwind CSS directly into Shadow DOM
        const styleElement = document.createElement('style');
        styleElement.textContent = styles;
        shadow.appendChild(styleElement);
        
        // Append mount point
        shadow.appendChild(this.mountPoint);
      }

      // Relay events from window down to this Custom Element so Velo can listen to them
      this.relayEvents = (e: Event) => {
        const ce = e as CustomEvent;
        this.dispatchEvent(new CustomEvent(ce.type, { detail: ce.detail }));
      };
      const eventsToRelay = [
        'wix:request', 'auth:complete', 'student:added', 'cart:updated',
        'waivers:signed', 'payment:initiate', 'payment:success', 'promo:validate'
      ];
      eventsToRelay.forEach(evt => window.addEventListener(evt, this.relayEvents as EventListener));

      try {
        if (!this.root) {
          this.root = createRoot(this.mountPoint);
        }

        this.root.render(
          <React.StrictMode>
            <Component />
          </React.StrictMode>
        );
        console.log(`[TNHP:${componentName}] React render initiated.`);
      } catch (err) {
        console.error(`[TNHP:${componentName}] React Render Error:`, err);
        if (this.mountPoint) {
          this.mountPoint.innerHTML = `<div style="color: red;">React Render Error: ${err}</div>`;
        }
      }
    }

    disconnectedCallback() {
      console.log(`[TNHP:${componentName}] Custom Element disconnected from DOM.`);
      if (this.relayEvents) {
        const eventsToRelay = [
          'wix:request', 'auth:complete', 'student:added', 'cart:updated',
          'waivers:signed', 'payment:initiate', 'payment:success', 'promo:validate'
        ];
        eventsToRelay.forEach(evt => window.removeEventListener(evt, this.relayEvents as EventListener));
      }
    }
  };
}

// Register the three elements for Wix
const RegistrationElement = createWixCustomElement(RegistrationFlow, 'Registration');
customElements.define('tnhp-registration', RegistrationElement);
// Also register the misspelled variant because the Wix Editor has it saved with this typo
if (!customElements.get('tnhp-reistration')) {
  customElements.define('tnhp-reistration', class extends RegistrationElement {});
}
customElements.define('tnhp-parent', createWixCustomElement(ParentApp, 'ParentPortal'));
customElements.define('tnhp-admin', createWixCustomElement(AdminApp, 'AdminDashboard'));
