import { LinkedIn, GitHub, Email } from "@mui/icons-material"

export default function Footer() {
  return <>
    <section className="w-full">
      <footer>
        <div className="flex flex-col justify-center items-center bg-neutral-100 w-100 h-36 box-border p-8">
          <div className="footer-content flex flex-row justify-center align-middle w-full p-2">
            <ul className="flex flex-row">
              <li>
                <a className="p-2" href="https://linkedin.com/in/pete-pongpeauk" target="_blank" rel="noreferrer"><LinkedIn sx={{ fontSize: 32 }} /></a>
              </li>
              <li>
                <a className="p-2" href="https://github.com/ppongpeauk" target="_blank" rel="noreferrer"><GitHub sx={{ fontSize: 32 }} /></a>
              </li>
              <li>
                <a className="p-2" href="mailto:kurtsiberg@gmail.com" rel="noreferrer"><Email sx={{ fontSize: 32 }} /></a>
              </li>
            </ul>
          </div>
          <div className="w-full p-2">
            <p className="text-lg text-black text-center">Made with ♡ by eve.</p>
          </div>
        </div>
      </footer>
    </section>
  </>
}