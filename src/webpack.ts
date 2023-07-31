import { webpack } from "replugged";
const { getModule } = webpack;

export const PreloadedUserSettings = getModule<{
  getCurrentValue: () => any;
}>((m: any) => m.ProtoClass?.typeName.endsWith("PreloadedUserSettings"));
