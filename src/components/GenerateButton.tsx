import { components, webpack } from "replugged";
import { buildTimestampModal } from "./TimestampGenerator";

const { Clickable, Tooltip } = components;
const { getModule } = webpack;

// Font Awesome Free 6.4.0 by @fontawesome
// https://fontawesome.com
// License - https://fontawesome.com/license (Commercial License)
// Copyright 2023 Fonticons, Inc.

export const TimestampGenerateButton: (() => JSX.Element) = () => (
  <Tooltip text="Generate Timestamp" className="ts-generateicon">
    <Clickable
      style={{ marginTop: 12, marginRight: 5, marginLeft: 5, overflow: "visible" }}
      onClick={() => {
        const ComponentDispatch = getModule<{
          dispatchToLastSubscribed: (event: string, data: any) => void;
          safeDispatch: (event: string) => void;
        }>((m: any) => m.emitter?._events?.INSERT_TEXT);
      }}>
      <svg
        key="Generate Timestamp"
        fill="var(--header-secondary)"
        viewBox="0 0 512 512"
        height="21"
        width="21">
        <path
          d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"
        />
      </svg>
    </Clickable>
  </Tooltip>
);