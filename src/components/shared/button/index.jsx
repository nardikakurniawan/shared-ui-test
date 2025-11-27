import { Button as ButtonRoot } from "@/components/ui/button";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const extendedButtonVariants = cva(
  "cursor-pointer duration-500 transition-all rounded-full text-xs", // Initial styles
  {
    variants: {
      variant: {
        primary: "btn-primary text-white",
        second: "btn-secondary text-black",
        add: "btn-primary text-white w-[120px]",
        cancel: "btn-cancel text-white w-[120px]",
        delete: "btn-delete text-white w-[120px]",
        white: "btn-white text-black",
        green: "btn-green text-white",
        "outline-primary":
          "erp-btn-outline-primary border border-app-primary bg-transparent text-app-primary shadow-xs hover:bg-app-primary/5 hover:text-app-primary/80",

        "gradient-light-blue":
          "text-black border border-white bg-[linear-gradient(92deg,rgba(0,204,255,0.10)_0.13%,rgba(224,247,255,0.10)_54.59%,rgba(11,92,255,0.10)_99.63%)]",
      },
      size: {
        xs: "erp-btn-xs h-6 gap-1 px-3 has-[>svg]:px-2 text-[8px]",
        xl: "erp-btn-xl h-12 px-8 text-base font-medium",
        xxl: "erp-btn-xxl h-14 px-10 text-xl",
        headTable: "erp-btn-headTable h-9 px-4 py-2",
      },
    },
  }
);

/**
 * A custom button component.
 *
 * @param {string} variant - The variant of the button to use. Available
 *   options are "primary", "special", and "link". Defaults to "primary".
 * @param {string} size - The size of the button to use. Available options are
 *   "sm", "md", "lg", "xl", and "xxl". Defaults to "md".
 * @param {string} className - An optional class name to add to the button.
 * @param {*} children - The content of the button.
 * @param {*} props - Additional props to pass to the underlying component.
 *
 * @returns {React.ReactElement} The button component.
 */
const Button = ({ variant, size, className, children, ...props }) => {
  return (
    <ButtonRoot
      className={cn(extendedButtonVariants({ variant, size }), className)}
      variant={variant}
      size={size}
      {...props}
    >
      {children}
    </ButtonRoot>
  );
};

export default Button;
