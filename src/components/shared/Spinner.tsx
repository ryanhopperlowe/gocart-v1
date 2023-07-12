import { Spinner as TwSpinner } from "@/external";
import classnames from "classnames";

interface SpinnerProps {
  className?: string;
  centered?: boolean;
}

export function Spinner(props: SpinnerProps) {
  const { centered } = props;

  return (
    <div
      className={classnames(props.className, {
        "grid grid-cols-1 content-center justify-items-center h-full w-full":
          centered,
      })}
    >
      <TwSpinner className={`text-primary-600 h-8 w-8`} />
    </div>
  );
}
