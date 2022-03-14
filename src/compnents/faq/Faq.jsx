import './Faq.scss'

import { questions } from './questions'

import Item from './Item'

export default function Faq () {
  return (
    <div id="faq">
      {questions.map(x => (<Item {...x} />))}
    </div>
   )
}
