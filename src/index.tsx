import { Injector, Logger, webpack } from "replugged";

const inject = new Injector();
const logger = Logger.plugin("GenerateTimestamp");

export { TimestampGenerateButton } from "./components/GenerateButton";

export async function start(): Promise<void> {}

export function stop(): void {
  inject.uninjectAll();
}
