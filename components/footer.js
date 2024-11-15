import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function Footer() {
  return (
    <div className="relative">
      <footer>
        <div className="absolute bottom-0 w-full flex items-center justify-center p-4 text-sm flex-col gap-y-1">
          <p>Made with ❤️ and ☕ in New York, NY</p>
          <a href="https://github.com/yi-ye-zhi-qiu/liamscafe">Source code</a>
          <p className="text-xs p-2">&copy; {new Date().getFullYear()} Liam&apos;s Caf&eacute;</p>
          <p>liam.isaacs.data@gmail.com</p>
        </div>
      </footer>
    </div>
  )
}
