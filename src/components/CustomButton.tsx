interface ButtonProps {
  text: string;
  bgColor: string;
  cb: () => void;
}

export default function CustomButton({ text, bgColor, cb }: ButtonProps) {
  return (
    <button className={`text-white bg-${bgColor} px-4 py-2 font-bold rounded-xl`} onClick={() => cb()}>{text}</button>
  )
}