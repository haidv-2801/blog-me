import { useEffect } from 'react';

const BlogDetail = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="blog-detail">
      <div className="box-info">
        <img
          src="https://images.unsplash.com/photo-1628857544589-47ab48debe87?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt="my"
          className="round-img"
        />
        <span className="name">Do Van Hai</span>
        <span className="date">JULY 2, 2020</span>
      </div>

      <h2 className="title row">
        Your most unhappy customers are your greatest source of learning.
      </h2>
      <img
        src="https://images.unsplash.com/photo-1628881910804-53cfebaf5a75?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        alt="img"
        className="image"
      />

      <p className="row">
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts. Separated they live in
        Bookmarksgrove right at the coast of the Semantics, a large language
        ocean.
      </p>

      <p className="row">
        A small river named Duden flows by their place and supplies it with the
        necessary regelialia. It is a paradisematic country, in which roasted
        parts of sentences fly into your mouth.
      </p>

      <p className="row">
        The Big Oxmox advised her not to do so, because there were thousands of
        bad Commas, wild Question Marks and devious Semikoli, but the Little
        Blind Text didn’t listen. She packed her seven versalia, put her initial
        into the belt and made herself on the way.
      </p>

      <p className="row">
        Even the all-powerful Pointing has no control about the blind texts it
        is an almost unorthographic life One day however a small line of blind
        text by the name of Lorem Ipsum decided to leave for the far World of
        Grammar.
      </p>

      <p className="row">
        When she reached the first hills of the Italic Mountains, she had a last
        view back on the skyline of her hometown Bookmarksgrove, the headline of
        Alphabet Village and the subline of her own road, the Line Lane. Pityful
        a rethoric question ran over her cheek, then she continued her way.
      </p>
    </div>
  );
};

export default BlogDetail;
