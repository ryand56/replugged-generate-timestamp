import { types } from "replugged";

const patches: types.PlaintextPatch[] = [
  {
    find: "GIFT_BUTTON).analyticsLocations",
    replacements: [
      {
        // Chatbar Lock
        match: /(.)\.push.{1,}\(.{1,3},\{.{1,30}\},"gift"\)\)/,
        replace:
          "$&;try{$1.push(window.replugged.plugins.getExports('dev.ryand.GenerateTimestamp').TimestampGenerateButton())}catch{}",
      },
    ],
  },
];

export default patches;
