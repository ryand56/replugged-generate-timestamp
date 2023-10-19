import { Injector, Logger, webpack, common } from "replugged";
import { ApplicationCommandOptionType } from "replugged/types";

const inject = new Injector();
const logger = Logger.plugin("GenerateTimestamp");

import { DateTime } from "luxon";

export async function start(): Promise<void> {
  inject.utils.registerSlashCommand({
    name: "timestamp generate",
    description: "Generates a discord formatted timestamp",
    options: [
      {
        type: ApplicationCommandOptionType.Boolean,
        name: "ephemeral",
        description: "Is message shown only to you or not",
        required: false,
      },
      {
        type: ApplicationCommandOptionType.String,
        name: "date",
        description: "The date the timestamp is attached to",
        required: false,
      },
      {
        type: ApplicationCommandOptionType.String,
        name: "time",
        description: "The time the timestamp is attached to (in 24 hour format)",
        required: false,
      },
      {
        type: ApplicationCommandOptionType.String,
        name: "type",
        description: "The type of timestamp to display",
        required: false,
        choices: [
          { name: "Short Time", displayName: "Short Time", value: "t" },
          { name: "Long Time", displayName: "Long Time", value: "T" },
          { name: "Short Date", displayName: "Short Date", value: "d" },
          { name: "Long Date", displayName: "Long Date", value: "D" },
          {
            name: "Long Date with Short Time",
            displayName: "Long Date with Short Time",
            value: "f",
          },
          {
            name: "Long Date with Day of Week and Short Time",
            displayName: "Long Date with Day of Week and Short Time",
            value: "F",
          },
          { name: "Relative", displayName: "Relative", value: "R" },
        ],
      },
    ],
    executor: (interaction) => {
      try {
        const date = interaction.getValue("date", DateTime.now().toISODate());
        const time = interaction.getValue(
          "time",
          DateTime.now().toISOTime({ includePrefix: true }),
        );

        let timestamp;
        if (date && time) {
          const newDate = DateTime.fromISO(String(date) + String(time));
          timestamp = newDate.toUnixInteger();
        }

        const type = interaction.getValue("type", "R");

        return {
          send: !interaction.getValue("ephemeral", true),
          result: `\`<t:${timestamp}:${type}>\`\n<t:${timestamp}:${type}>`,
        };
      } catch (err) {
        return {
          send: false,
          result: "Something went wrong while generating the timestamp.",
        };
      }
    },
  });
}

export function stop(): void {
  inject.uninjectAll();
}
