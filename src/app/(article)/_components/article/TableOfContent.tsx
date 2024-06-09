import type { NextPage } from 'next'
import Link from "next/link"
import { marked, Tokens } from "marked"

type Props = {
    content: string
}

const TableOfContents: NextPage<Props> = ({ content }) =>{
  const tokens = marked.lexer(content)
  const headings= tokens.filter((token, i) => token.type === "heading") as  Tokens.Heading[] ;
  return (
    <aside>
      <nav>
        <h2>目次</h2>
        <ul>
          {headings.map((heading, i) => (
            <li key={i} data-depth={heading.depth}>
              <Link
                key={i}
                href={`#${heading.text
                  .replace(/ /g, "-")
                  .replace(/[\/\\^$*+?.()|\[\]{}<>:;"'~,=@`#!%&]/g, "")
                  .toLowerCase()}`}
              >
                <p key={i}>{heading.text}</p>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
export default TableOfContents