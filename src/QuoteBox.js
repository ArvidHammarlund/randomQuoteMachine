
export default function QuoteBox({quoteText}) {
    return (
        <div id="quote-Box">
            {/*Quote text*/}
            <h1 id="text" className="fading">
                <i className="fa fa-quote-left"></i> {quoteText.quote}
            </h1>
            <p id="author" className="fading">- {quoteText.author}</p>
            <a 
                id="tweet-quote" 
                href="twitter.com/intent/tweet"
            >
                <i className="fa fa-twitter themeColor"></i>
            </a>
        </div>
    )
}