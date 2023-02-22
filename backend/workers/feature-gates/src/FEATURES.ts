import type { FEATURE_GATES_MAP } from "@coral-xyz/common";

export const FEATURE_GATES = {
  PRIMARY_PUBKEY_ENABLED: true,
  SWAP_FEES_ENABLED: false,
} satisfies {
  // ensure all keys are present
  [feature in keyof FEATURE_GATES_MAP]: boolean;
};
