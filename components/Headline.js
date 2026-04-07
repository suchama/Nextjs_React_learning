

export default function Headline(props) {
  console.log(props.title)  
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        
        <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            {props.title}!!!
            app/page.js ファイルを編集して始めよう。
        </h1>
    </div>

  );
}