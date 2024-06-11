/** @format */

import Image from 'next/image';
import styles from './About.module.css';
import Link from 'next/link';

export const metadata = {
  title: 'Joanne',
  description: 'hello world',
};
function About() {
  return (
    <>
      <section>
        <div className="page-wrapper">
          <div className={styles.about_grid}>
            <div className={styles.about_leftside}>
              <div className={styles.left_container}>
                <article>
                  <h1 className="fs-900 l-m italic l-3">Joanne's World</h1>
                  <p className="ff-sans l-s fs-400 l-2">
                    Hey there! I'm Joanne, and I'm welcoming you to my corner of
                    the internet. Here, you'll find a little bit of everything –
                    from fashion and beauty to advocacy and empowerment.
                  </p>
                  <h2 className="fs-700 l-4 l-m italic">Who is Joanne?</h2>
                  <p className="ff-sans l-s fs-400 l-2">
                    I'm a firm believer in living life to the fullest and
                    embracing every opportunity that comes my way. By day, I'm a
                    passionate lawyer for equality. But when the sun sets,
                    you'll often find me in front of the camera, as a lingerie
                    model.
                  </p>
                  <h3 className="fs-700 l-4 l-m italic">Why Joanne's World?</h3>
                  <p className="ff-sans l-s fs-400 l-2">
                    This space is more than just a portfolio or a blog – it's a
                    reflection of who I am and what I stand for. Whether I'm
                    sharing my latest fashion finds, discussing important social
                    issues, or simply sharing snippets of my daily life, I want
                    this to be a place where you feel inspired, empowered, and
                    uplifted.
                  </p>
                  <h4 className="fs-700 l-4 l-m italic">Join the Journey</h4>
                  <p className="ff-sans l-s fs-400 l-2">
                    So, what are you waiting for? Dive into my blog posts,
                    browse through my social media accounts, and join me on this
                    incredible journey. Together, we'll celebrate the beauty of
                    diversity, the power of self-expression, and the joy of
                    living.
                  </p>
                  <h5 className="fs-700 l-4 l-m italic">Let's Connect</h5>
                  <p className="ff-sans l-s fs-400 l-2">
                    Have a question, a comment, or just want to say hi? Don't be
                    shy – I'd love to hear from you! Drop me a message on social
                    media or shoot me an email, and let's start a conversation.
                    Thanks for stopping by – I can't wait to see where this
                    journey takes us! With love, Joanne.
                  </p>
                </article>
                <div>
                  <div className={styles.mobile_center}>
                    <Link href="/shoots" prefetch={false}>
                      <div className={styles.btn}>
                        <span className="accent upper fs-400">See More</span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.about_rightside}>
              <div className={styles.right_container}>
                <div className={styles.about_img_container}>
                  <Image
                    src="/mobile-Recovered.jpg"
                    alt=""
                    height={0}
                    width={0}
                    sizes="100vw"
                    className={styles.about_image}></Image>
                </div>
                <div className={styles.about_social}>
                  <div className={styles.detail_cta}>
                    <p className="fs-400 l-b ff-sans">Share on social!</p>
                    <div className={styles.cta_container}>
                      <button>share</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.spacer}></div>
      </section>
    </>
  );
}

export default About;
