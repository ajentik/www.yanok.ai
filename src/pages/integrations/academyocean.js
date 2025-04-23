import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="AcademyOcean"
      description={`AcademyOcean is an LMS system that helps businesses automate training for employees, customers, and partners.`}
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/academyocean.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        AcademyOcean Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(1, 119, 255, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">AcademyOcean is an LMS system that helps businesses automate training for employees, customers, and partners.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Certificate</div>
  <div>Triggers when your Learners receive certificates.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Triggers When a Learner Finishes a Course</div>
  <div>Triggers when your Learners complete a course.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Learner</div>
  <div>Triggers when a new Learner joins your Academy.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Learners With an Unfinished Academy</div>
  <div>Triggers when you have a Learner with one completed course and one unstarted course who hasn\'t been active in your Academy for at least one day.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Learners With Unfinished Course</div>
  <div>Triggers when a Learner has at least one incomplete course and hasn\'t visited the Academy for two days.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Get Inactive Learners After 7 Days With an Unfinished Academy</div>
  <div>Triggers when your Learners have at least one unstarted course, and check to see if they have visited the Academy in the past week.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Invite Accepted</div>
  <div>Triggers when you or another admin accepts a Learner\'s request, thus giving them access to the Academy.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Learner Login</div>
  <div>Triggers when your Learners log in to your Academy.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add Learner Into Existing Team</div>
  <div>This action allows you to add learner into team.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Gives a Learner Access to a Private Academy</div>
  <div>Allow your Learners to get access to a private Academy.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Remove Learner From Existing Team</div>
  <div>This action allows you to remove learner from team.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Return Learner Academy Access</div>
  <div>This action allows you to return learner academy access.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Revoke Learner Academy Access</div>
  <div>This action allows you to revoke learner academy access.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Search for a Learner</div>
  <div>Find a specific Learner.</div>
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
          <title>AcademyOcean</title>
          <meta name="description" content={`AcademyOcean is an LMS system that helps businesses automate training for employees, customers, and partners.`} />
        </>
      ),
    },
  };
}
