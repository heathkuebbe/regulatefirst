import { useState } from "react";
import MenuDrawer from "./MenuDrawer";
import rfSymbol from "../assets/rf-symbol.png";

type BehindRegulateFirstProps = {
  onBegin: () => void;
  onInvitation: () => void;
  onUnderstand: () => void;
  onBehind: () => void;
  onVision: () => void;
  onPractice: () => void;
  onCommunity: () => void;
};

function BehindRegulateFirst({
  onBegin,
  onInvitation,
  onUnderstand,
  onBehind,
  onVision,
  onPractice,
  onCommunity,
}: BehindRegulateFirstProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <article className="behind-room">
      <button
        type="button"
        className="rf-room-brand rf-room-brand-link"
        onClick={onInvitation}
      >
        <img src={rfSymbol} alt="" className="rf-room-symbol" />

        <div className="rf-room-brand-copy">
          <strong>Regulate First</strong>
          <span>Inward first, then forward.</span>
        </div>
      </button>

      <button
        type="button"
        className="understand-menu"
        aria-label="Open menu"
        onClick={() => setIsMenuOpen(true)}
      >
        <span />
        <span />
        <span />
      </button>

      <header className="behind-hero">
        <div className="behind-story-container">
          <p className="behind-room-label">Behind Regulate First</p>

          <h1>The Longing</h1>

          <div className="behind-opening">
            <p>For as long as I can remember, I’ve been a seeker.</p>

            <p className="behind-seeker-lines">
              <span>A seeker of truth.</span>
              <span>Of purpose.</span>
              <span>Of meaning.</span>
            </p>

            <p>
              I’ve never been able to shake the feeling that we are more than
              the lives we often find ourselves living.
            </p>

            <p>
              That beneath our routines, our responsibilities, our successes,
              our failures, our thoughts, and our roles, there is something
              deeper.
            </p>

            <p>Something quietly waiting to be expressed.</p>

            <p>
              For years, I couldn’t explain why that feeling never left me. I
              only knew it continued calling me forward.
            </p>

            <p>Eventually, it became one question.</p>
          </div>

          <blockquote className="behind-central-question">
            What allows a person to come fully alive...
            <span>and what keeps us from it?</span>
          </blockquote>
        </div>
      </header>

      <main className="behind-story">
        <section className="behind-story-section">
          <div className="behind-story-container">
            <p className="behind-section-label">The Search</p>

            <h2>A question that quietly chose me.</h2>

            <div className="behind-story-copy">
              <p>
                Looking back, I don’t think I chose that question. I think it
                quietly chose me.
              </p>

              <p>It first appeared as compassion.</p>

              <p>
                As a teenager, I remember seeing profound human suffering for
                the first time. I didn’t know what to do with what I felt. I
                only knew something inside me couldn’t simply look away.
              </p>

              <p>
                Later, that same question followed me into ministry. It
                followed me into the Navy. Into marriage. Into fatherhood. Into
                healthcare leadership. Into seasons of achievement. Into
                seasons of collapse.
              </p>

              <p>Each chapter looked different.</p>

              <p>Yet each one kept asking the same question.</p>

              <p className="behind-emphasis">
                What truly helps a person become whole?
              </p>

              <p>Including me.</p>
            </div>
          </div>
        </section>

        <section className="behind-story-section behind-drift-section">
          <div className="behind-story-container">
            <p className="behind-section-label">The Drift</p>

            <h2>Life has a quiet way of pulling us away from ourselves.</h2>

            <div className="behind-story-copy">
              <p>Not all at once.</p>

              <p>Almost never dramatically.</p>

              <p className="behind-statement">We drift.</p>

              <div className="behind-drift-list" aria-label="Ways we drift">
                <span>Into expectations.</span>
                <span>Into achievement.</span>
                <span>Into responsibility.</span>
                <span>Into fear.</span>
                <span>Into striving.</span>
                <span>Into becoming who we believe we need to be.</span>
              </div>

              <p>I know that drift because I lived it.</p>

              <p>
                For years, I measured my life by how well I fulfilled my roles.
              </p>

              <div className="behind-role-list" aria-label="Life roles">
                <span>Leader.</span>
                <span>Provider.</span>
                <span>Husband.</span>
                <span>Father.</span>
              </div>

              <p>Each role mattered deeply.</p>

              <p>
                But somewhere along the way, I forgot that they were
                expressions of my life—not the source of it.
              </p>

              <p>
                I slowly became identified by what I did instead of remaining
                connected to who I was.
              </p>
            </div>
          </div>
        </section>

        <section className="behind-story-section behind-return-section">
          <div className="behind-story-container">
            <p className="behind-section-label">The Return</p>

            <h2>One ordinary morning, I finally stopped.</h2>

            <div className="behind-story-copy">
              <p>
                I was sitting at my kitchen table under the weight of anxiety,
                pressure, and exhaustion.
              </p>

              <p>Outside the window, I heard the birds.</p>

              <div className="behind-birds-moment">
                <p>The birds had always been there.</p>
                <p>I hadn’t.</p>
              </div>

              <p>
                Nothing about my circumstances changed that morning. But
                something inside me softened.
              </p>

              <p>
                For the first time in a long time, I wasn’t trying to become
                someone.
              </p>

              <p>I was simply present.</p>

              <p>That moment became a doorway.</p>

              <p>
                Not because it answered every question, but because it reminded
                me where life actually happens.
              </p>

              <div className="behind-here-lines">
                <span>Here.</span>
                <span>Not in tomorrow.</span>
                <span>Not in yesterday.</span>
                <span>Here.</span>
              </div>

              <p>
                Over the years that followed, through study, reflection,
                rebuilding, and practice, one truth continued revealing itself.
              </p>

              <p className="behind-statement">
                We rarely find ourselves all at once.
              </p>

              <p className="behind-statement">We return.</p>

              <div className="behind-again-lines">
                <span>Again.</span>
                <span>And again.</span>
                <span>And again.</span>
              </div>
            </div>
          </div>
        </section>

        <section className="behind-story-section">
          <div className="behind-story-container">
            <p className="behind-section-label">What I Came to Believe</p>

            <h2>Transformation begins with returning.</h2>

            <div className="behind-story-copy">
              <p>I no longer believe transformation begins with striving.</p>

              <p>I believe it begins with returning.</p>

              <div className="behind-return-list">
                <span>Returning to the body.</span>
                <span>Returning to awareness.</span>
                <span>Returning to the present moment.</span>
                <span>Returning to what matters.</span>
                <span>Returning to ourselves.</span>
              </div>

              <p>
                I’ve come to believe there is something within every person
                that longs to come fully alive.
              </p>

              <p>Not by becoming someone new.</p>

              <p>
                But by uncovering what has always been there beneath the noise.
              </p>

              <div className="behind-beneath-list">
                <span>Beneath fear.</span>
                <span>Beneath shame.</span>
                <span>Beneath success.</span>
                <span>Beneath striving.</span>
                <span>Beneath every story we’ve mistaken for ourselves.</span>
              </div>

              <p className="behind-emphasis">
                What is most true about us is rarely absent.
              </p>

              <p>It is simply waiting to be remembered.</p>
            </div>
          </div>
        </section>

        <section className="behind-story-section behind-origin-section">
          <div className="behind-story-container">
            <p className="behind-section-label">Regulate First</p>

            <h2>What began as a search became a way of returning.</h2>

            <div className="behind-story-copy">
              <p>
                Regulate First wasn’t born from a desire to write a book.
              </p>

              <p>It grew from a lifelong search.</p>

              <p>
                A search to understand why people who sincerely want to change
                often struggle to do so.
              </p>

              <p>
                A search to understand why awareness alone isn’t enough.
              </p>

              <p>
                A search to understand why we lose touch with ourselves—and how
                we find our way back.
              </p>

              <p>Over time, I realized something beautifully simple.</p>

              <div className="behind-before-list">
                <span>Before we can think clearly...</span>
                <span>before we can choose wisely...</span>
                <span>before we can love freely...</span>
                <span>before we can fully express who we are...</span>
              </div>

              <p className="behind-emphasis">
                we must first learn how to return.
              </p>

              <p>
                Everything that became Regulate First grew from that
                realization.
              </p>
            </div>
          </div>
        </section>

        <section className="behind-story-section">
          <div className="behind-story-container">
            <p className="behind-section-label">Why I Continue</p>

            <h2>This work calls me more than I pursue it.</h2>

            <div className="behind-story-copy">
              <p>
                People sometimes ask why this work matters so deeply to me.
              </p>

              <p>The only honest answer I know is this.</p>

              <p>I don’t feel like I chose it.</p>

              <p>I feel like it quietly chose me.</p>

              <p>
                For years, that longing found expression through endurance.
                Later, it found expression through writing. Tomorrow, it may
                find another form.
              </p>

              <p>The expression isn’t what matters.</p>

              <p>The longing is.</p>

              <div className="behind-still-list">
                <span>I’m still a seeker.</span>
                <span>Still learning.</span>
                <span>Still returning.</span>
                <span>Still discovering what it means to come fully alive.</span>
              </div>
            </div>
          </div>
        </section>

        <section className="behind-story-section behind-welcome-section">
          <div className="behind-story-container">
            <p className="behind-section-label">Welcome</p>

            <h2>Perhaps you’ve been carrying this longing too.</h2>

            <div className="behind-story-copy">
              <p>If you’ve found your way here...</p>

              <p>
                perhaps you’ve sensed that you are more than the life you’ve
                been trying so hard to hold together.
              </p>

              <div className="behind-more-than-list">
                <span>More than your accomplishments.</span>
                <span>More than your failures.</span>
                <span>More than your thoughts.</span>
                <span>More than the roles you play.</span>
              </div>

              <p>If so...</p>

              <p>welcome.</p>

              <p>I’m grateful you’re here.</p>

              <p>I don’t have all the answers.</p>

              <p>
                I simply hope this work helps you remember something that has
                become deeply true for me.
              </p>

              <div className="behind-final-reflection">
                <p>
                  Perhaps becoming fully alive isn’t about becoming someone
                  else.
                </p>

                <p>
                  Perhaps it’s about returning to the person you’ve been all
                  along.
                </p>
              </div>
            </div>

            <p className="behind-signature">
              Inward first, then forward.
            </p>
          </div>
        </section>

        <section className="behind-next">
          <div className="behind-next-heading">
            <p className="behind-section-label">Continue the Journey</p>
            <h2>Choose the path that feels right for you.</h2>
          </div>

          <div className="behind-next-grid">
            <article className="behind-next-option">
              <p className="behind-next-kicker">The Book</p>
              <h3>Explore the ideas.</h3>
              <p>
                Discover the framework, principles, and practices at the
                foundation of Regulate First.
              </p>

              <button type="button" onClick={onUnderstand}>
                Begin with the Book →
              </button>
            </article>

            <article className="behind-next-option">
              <p className="behind-next-kicker">The Practice</p>
              <h3>Experience the return.</h3>
              <p>
                Explore guided practices designed to help you pause, reconnect,
                and begin again.
              </p>

              <button type="button" onClick={onPractice}>
                Enter the Practice Room →
              </button>
            </article>

            <article className="behind-next-option">
              <p className="behind-next-kicker">The Vision</p>
              <h3>See the larger path.</h3>
              <p>
                Explore how regulation opens into strength, connection, and a
                more awakened way of living.
              </p>

              <button type="button" onClick={onVision}>
                Explore the Bigger Picture →
              </button>
            </article>
          </div>
        </section>
      </main>

      <MenuDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onBegin={onBegin}
        onInvitation={onInvitation}
        onUnderstand={onUnderstand}
        onBehind={onBehind}
        onVision={onVision}
        onPractice={onPractice}
        onCommunity={onCommunity}
      />
    </article>
  );
}

export default BehindRegulateFirst;