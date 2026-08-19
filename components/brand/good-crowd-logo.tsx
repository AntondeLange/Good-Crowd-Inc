import Image from "next/image";

type GoodCrowdLogoProps = {
  className?: string;
  priority?: boolean;
  variant?: "onLight" | "onDark";
};

export function GoodCrowdLogo({
  className,
  priority = false,
  variant = "onLight",
}: GoodCrowdLogoProps) {
  const src =
    variant === "onDark"
      ? "/brand/good-crowd-logo-dark.png"
      : "/brand/good-crowd-logo-light.png";

  return (
    <span className={["relative block overflow-hidden", className].filter(Boolean).join(" ")}>
      <Image
        src={src}
        alt="Good Crowd Inc."
        fill
        priority={priority}
        sizes="(max-width: 768px) 88px, 128px"
        className="object-cover"
      />
    </span>
  );
}
