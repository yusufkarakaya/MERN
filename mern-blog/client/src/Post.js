import { Link } from 'react-router-dom';
export default function Post() {
  return (
    <div className='post'>
      <div className='image'>
        <img
          src='https://techcrunch.com/wp-content/uploads/2023/05/google-bard.jpg?w=1390&crop=1'
          alt='blog post cover'
        />
      </div>

      <div className='texts'>
        <h2>
          Google ends Bard waitlist, making English version of chatbot widely
          available
        </h2>
        <p className='info'>
          <Link to={'/author'} className='author'>
            Yusuf Karakaya
          </Link>
          <time className='date'>May 19</time>
        </p>
        <p className='summary'>
          At Google I/O today, the company announced that it was removing most
          waitlist restrictions and making Bard, the company’s generative AI
          chatbot, more widely available, starting today in English.
        </p>
      </div>
    </div>
  );
}
