export type FormState =
  | {
      errors?: {
        name?: string[];
        user?: string[];
        password?: string[];
      };
      success?: boolean;
      message?: string;
    }
  | undefined;
