export type FormState =
  | {
      errors?: {
        cantidad?: string[];
      };
      success?: boolean;
      message?: string;
    }
  | undefined;
