import { Component, signal } from '@angular/core';

type Feature = {
  icon: string;
  title: string;
  detail: string;
};

@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Angular Demo');
  protected readonly loadedAt = new Date().toLocaleString();
  protected readonly clicks = signal(0);

  protected readonly features: Feature[] = [
    { icon: '🅰️', title: 'Angular 22', detail: 'Standalone components, signals, zero NgModules.' },
    { icon: '🐳', title: 'Kaniko build', detail: 'Built into a container image straight from this repo — no local Docker needed.' },
    { icon: '🔄', title: 'ArgoCD sync', detail: 'Deployed and kept in sync with what this repo’s k8s/ folder declares.' },
    { icon: '☸️', title: 'Runs on OKE', detail: 'Served by NGINX inside Oracle Kubernetes Engine.' },
  ];

  protected bump(): void {
    this.clicks.update((n) => n + 1);
  }
}
