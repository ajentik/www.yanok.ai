import IntegrationLayout from '@/components/IntegrationLayout';

export default function Page() {
  return (
    <IntegrationLayout 
      title="DropFunnels"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="flex flex-col items-center pt-10">
  <div class="flex flex-row gap-12">
    <img class="size-20" src="/assets/images/integrations/dropfunnels.png" />
    <div class="flex items-center justify-between grow">
      <h1>
        DropFunnels Integrations
        <span class="block max-w-full h-0.5" style="background-color: rgba(0, 174, 235, 1)"></span>
      </h1>
    </div>
  </div>
  <p class="max-w-3xl mt-8 text-center">DropFunnels application allows an authenticated user to transfer their data regarding leads, memberships, and orders from DropFunnels to any other platform.</p>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Triggers</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Course Member Deactivated</div>
  <div>Triggers when a member is set as Deactivated to a course.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Course Member Deleted</div>
  <div>Triggers when a member is set as Deleted from a course.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Course Member Added</div>
  <div>Triggers when a new member is added to a course.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Order Created - All Products (Individual Events)</div>
  <div>Triggers when a new order is placed, contains all purchased products.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Order Created - All Products (Single Event)</div>
  <div>Triggers when a new order is placed, contains all purchased order in single trigger.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Subscription Order Created on All Products</div>
  <div>Triggers when a new subscription order is placed, contains all purchased products.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Quiz Result</div>
  <div>Triggers when a user completes a quiz</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Course Completed</div>
  <div>Triggers when a member completed any course.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Course Lesson Completed</div>
  <div>Triggers when a member completed lesson from course.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Course Module Completed</div>
  <div>Triggers when a member completed any module from course.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Course Unit Completed</div>
  <div>Triggers when a member completed any unit from course.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Lead</div>
  <div>Triggers when a new lead is added.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Order Created - Main Product Only</div>
  <div>Triggers when a new order is placed, contains the primary product only.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">New Order Created - Upsell/Downsell Only</div>
  <div>Triggers when a new order is placed, contains the upsell/downsell product only.</div>
</div>

    </div>
  </div>

  <div class="flex flex-col items-center mt-20">
    <h2 class="text-2xl font-bold">Actions</h2>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-start">
  <div class="font-semibold">Deactivate Member</div>
  <div>Deactivate specific Member.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Delete Member</div>
  <div>Delete specific Member.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Lead</div>
  <div>Create a lead into a funnel or pipeline stage.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Create Member</div>
  <div>Creates a new member.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Move Lead in Pipeline</div>
  <div>Move lead from one pipeline to another pipeline.</div>
</div>

<div class="flex flex-col items-start">
  <div class="font-semibold">Update Course Member</div>
  <div>Update Course Member. A new member will be added to the course if they do not exist</div>
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
          <title>DropFunnels</title>
        </>
      ),
    },
  };
}
