import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Vervoe"
      description={`Vervoe's AI-powered skill testing platform automatically recommends the strongest candidates to employers based purely on their performance in 'Talent Trials,' saving time and letting top candidates shine through sooner.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/vervoe.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Vervoe Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 160, 252, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Vervoe\'s AI-powered skill testing platform automatically recommends the strongest candidates to employers based purely on their performance in \'Talent Trials,\' saving time and letting top candidates shine through sooner.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">First AI Score for Candidate</div>
  <div>Triggers the first time AI grades a candidates response</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Updated AI Score for Candidate</div>
  <div>Triggers when AI score is updated by at least 2% (either up or down)</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Assessment Completed</div>
  <div>Triggers when a candidate completes an assessment</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Deadline Extended</div>
  <div>Triggers when the employer extends the assessment deadline for a candidate</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Candidate Hired</div>
  <div>Triggers when employer hires a candidate</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">First Manual Grade for Candidate</div>
  <div>Triggers the first time a user grades a candidates response</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Additional Manual Grade for Candidate</div>
  <div>Triggers when another user grades a candidate response and the score recalculates</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Candidate Rejected</div>
  <div>Triggers when employer rejects a candidate</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Candidate Requests More Time</div>
  <div>Triggers when a candidate requests additional time to complete</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Assessment Started</div>
  <div>Triggers when a candidate starts an assessment</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Comments on Candidate Card</div>
  <div>Triggers when a user adds a comment to the candidate\'s card</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Invite Candidates</div>
  <div>Invites the candidates</div>
</div>

    </div>
  </div>
</div>

<div class="site-gutter max-w-container mx-auto flex flex-col items-center gap-5 py-14">
  <p><span class="font-bold">Yanok Platform</span> is a powerhouse in web automation, acting as the essential
    connector to a multitude of web apps and
    services, seamlessly enabling them to collaborate.</p>
  <p>Create seamless integration with an intuitive no-code drag-and-drop interface.</p>
  <div class="block pt-5 flex flex-col md:flex-row gap-5 justify-center items-center">
    <a href="https://app.yanok.ai/quickstarts/business/new" class="btn btn-cta btn-xl">Automate with Yanok</a>
    <a href="/book-demo.html" class="btn ">Book a Demo</a>
  </div>
</div>` }} />
    </IntegrationLayout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      metaTags: (
        <>
          <title>Vervoe</title>
          <meta name="description" content={`Vervoe's AI-powered skill testing platform automatically recommends the strongest candidates to employers based purely on their performance in 'Talent Trials,' saving time and letting top candidates shine through sooner.`} />
        </>
      ),
    },
  };
}
