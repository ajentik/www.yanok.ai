import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="CYPHER LEARNING"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/cypher-learning.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        CYPHER LEARNING Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(94, 95, 95, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">CYPHER LEARNING is a leading provider of intelligent learning platforms (ILP) for schools, universities, organizations, and entrepreneurs around the world.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">User Was Added to Portal</div>
  <div>Triggers when a new user was added to the portal.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Badge Was Awarded to Learner</div>
  <div>Triggers when a badge was awarded to a learner.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Certificate Was Awarded to Learner</div>
  <div>Triggers when a certificate was awarded to a learner.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Order Payment Was Made</div>
  <div>Trigger when a payment was made for an order through the e-commerce integration.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Subscription Payment Was Made</div>
  <div>Triggers when a payment was made for an order through the e-commerce integration.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Learner Completed Course</div>
  <div>Triggers when a learner completes a course.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Learner Completed Path</div>
  <div>Triggers when an user completes a path.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Learner Enrolled in Course</div>
  <div>Triggers when a learner enrolls in a course.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Learner Enrolled in Path</div>
  <div>Triggers when an user is enrolled in a path.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Learner Unenrolled From Course</div>
  <div>Triggers when a learner is unenrolled from a course.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Learner Unenrolled From Path</div>
  <div>Triggers when an user is unenrolled from a path.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Add User, Then Enroll to Course (General)</div>
  <div>Add a user to your portal and enroll them into the classes they purchased.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add User, Then Enroll to Course (From Shopify)</div>
  <div>Add a user to your portal and enroll them into the classes they purchased.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add User, Then Enroll to Course (From WooCommerce)</div>
  <div>Add a user to your portal and enroll them into the classes they purchased.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Add User</div>
  <div>Adds a user to your CYPHER LEARNING portal.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Deactivate User</div>
  <div>Archive a user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Reactivate User</div>
  <div>Reactivate an archived user.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Unenroll User From Course</div>
  <div>Remove a user from the specified course/class.</div>
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
          <title>CYPHER LEARNING</title>
          <meta name="description" content={}/> />
        </>
      ),
    },
  };
}
