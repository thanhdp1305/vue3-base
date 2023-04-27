import type { Router } from "vue-router";

export interface Callback {
  onSuccess?: (...args: any) => void;
  onFailure?: (...args: any) => void;
  onFinish?: (...args: any) => void;
}

export type RequestCallback = (token: string) => Promise<void>;
