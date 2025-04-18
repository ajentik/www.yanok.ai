import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="Teachable"
      description="Teachable allows you to create and sell online courses without any technical knowledge from your own website."
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/teachable.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        Teachable Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(60, 148, 139, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">Teachable allows you to create and sell online courses without any technical knowledge from your own website.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">New Admission</div>
  <div>Triggers when a new admission record is created.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Admission Disabled</div>
  <div>Triggers when an admission in Coaching is disabled.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Comment</div>
  <div>Triggers when a user leaves a comment in your school.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Email Lead Created</div>
  <div>Triggers when a user has confirmed their email for lead capture.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Enrollment</div>
  <div>Triggers when a user enrolls in a course. (Note: User\'s will need to confirm enrollment before the trigger fires if you manually add them to a course).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Course Completed</div>
  <div>Triggers when a user completes 100% of a course.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Lecture Completed</div>
  <div>Triggers whenever a user completes a lecture on your school.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New User</div>
  <div>Triggers whenever a new user signs up for your school.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Graded Quiz Result</div>
  <div>Triggers when a user completes a graded quiz in one of your courses.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Student Resubscribes to Marketing Emails</div>
  <div>Triggers when a student opts in to marketing emails.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Sale</div>
  <div>Triggers whenever a user enrolls themselves in a course regardless of whether it is a free or paid course. If you add them as an admin, this does not trigger.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Profile Updated</div>
  <div>Triggers whenever a user updates their profile on your school.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Subscription Cancelled</div>
  <div>Triggers whenever a user cancels a subscription on your school.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Tag Added to User</div>
  <div>Triggers when a tag is added to a user. The "Tags" feature is only available to schools on the Professional plan or above.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Tag Removed From User</div>
  <div>Triggers when a tag is removed from a user. The "Tags" feature is only available to schools on the Professional plan or above.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Transaction Refunded</div>
  <div>Triggers when a transaction has been refunded</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Unenrollment</div>
  <div>Triggers when a user unenrolls in a course. (Note: Users who are unenrolled by admins will also be triggered).</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Student Unsubscribes From Marketing Emails</div>
  <div>Triggers when a student opts out of marketing emails.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Find Student</div>
  <div>Find a given student through their email address.</div>
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
          <title>Teachable</title>
          <meta name="description" content="Teachable allows you to create and sell online courses without any technical knowledge from your own website." />
        </>
      ),
    },
  };
}
