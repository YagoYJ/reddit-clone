import dynamic from "next/dynamic";
import Image from "next/image";

const Output = dynamic(
  async () => (await import("editorjs-react-renderer")).default,
  {
    ssr: false,
  }
);

interface EditorOutputProps {
  content: any
}

const style = {
  paragraph: {
    fontSize: "0.875rem",
    lineHeight: "1.25rem"
  }
}

const renderers = {
  image: CustomImageRenderer,
  // code: CustomCodeRederer
}

export function EditorOutput({ content }: EditorOutputProps) {
  return (
    //  @ts-expect-error
    <Output className="text-sm" renderers={renderers} data={content} style={style} />
  );
}


function CustomImageRenderer({ data }: any) {
  const src = data.file.url

  return (
    <div className="relative w-full min-h-[15rem]">
      <Image alt="image" className="object-contain" fill src={src} />
    </div>
  )
}