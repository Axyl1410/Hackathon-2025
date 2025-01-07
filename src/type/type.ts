export interface CardProps {
  title: string;
  image: string;
  floor: string;
  volume: string;
  [key: string]: unknown;
}

export type ThirdwebButtonProps = {
  type?: "icon" | "text";
};
