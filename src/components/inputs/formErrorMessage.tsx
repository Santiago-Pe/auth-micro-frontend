import React, { FC } from "react";

export type FormErrorMessageProps = {
  className?: string;
  children?: React.ReactNode; // Definir children como React.ReactNode
};

const FormErrorMessage: FC<FormErrorMessageProps> = ({
  children,
  className,
}) => (
  <p className={`text-sm text-left block text-red ${className}`}>{children}</p>
);

export default FormErrorMessage;
