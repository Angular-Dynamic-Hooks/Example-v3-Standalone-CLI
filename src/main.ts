import { HookParserEntry, parseHooks } from 'ngx-dynamic-hooks';
import { ExampleComponent } from './components/example/example.component';

// No need for this!
// bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));

// Load components via parseHooks instead
const parsers: HookParserEntry[] = [
  ExampleComponent,
];

parseHooks(document.body, parsers).then(result => {
  console.log(result);
});

// Allow other scripts in the DOM to manually parse content again by dispatching events
document.addEventListener('parseHooks', event => {
  parseHooks((event as CustomEvent).detail, parsers);
});