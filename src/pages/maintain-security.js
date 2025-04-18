import Layout from '@/components/Layout';

export default function Page() {
  return (
    <Layout 
      title="Maintain Security - Yanok Platform"
      description="Enterprise-Grade Security Features"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="pt-10 max-w-container mx-auto text-center">
  <h1 class="font-regular text-5xl md:text-7xl">Maintain Security</h1>
  <p class="text-2xl pt-10">Ensure Robust Protection with Advanced Security Protocols and AI-Driven Safeguards</p>
</div>

<div class="w-full text-white">
  <div class="site-gutter max-w-container mx-auto flex flex-col items-center gap-20 py-24">
    <div class="text-xl space-y-8">
      <h2 class="text-3xl font-bold">Comprehensive Security Framework</h2>
      <ul class="list-disc pl-8 space-y-4">
        <li>End-to-end encryption for data at rest and in transit</li>
        <li>Role-based access control and authentication</li>
        <li>Regular security audits and compliance checks</li>
        <li>Intrusion detection and prevention systems</li>
      </ul>

      <h2 class="text-3xl font-bold pt-12">AI-Driven Threat Intelligence</h2>
      <ul class="list-disc pl-8 space-y-4">
        <li>Real-time monitoring and anomaly detection</li>
        <li>Automated incident response and mitigation</li>
        <li>Predictive analytics for proactive security measures</li>
        <li>Behavioral analysis to identify potential threats</li>
      </ul>

      <h2 class="text-3xl font-bold pt-12">Data Protection and Privacy</h2>
      <ul class="list-disc pl-8 space-y-4">
        <li>Data masking and anonymization techniques</li>
        <li>Compliance with global data protection regulations (GDPR, HIPAA, etc.)</li>
        <li>Secure data storage solutions with redundancy</li>
        <li>User consent management and privacy controls</li>
      </ul>

      <h2 class="text-3xl font-bold pt-12">Security Integration and Automation</h2>
      <ul class="list-disc pl-8 space-y-4">
        <li>Integration with existing security tools and platforms</li>
        <li>Automated security policy enforcement</li>
        <li>Continuous vulnerability scanning and patch management</li>
        <li>Scalable security architecture to support growth</li>
      </ul>
    </div>
  </div>
</div>` }} />
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      metaTags: (
        <>
          <title>Maintain Security - Yanok Platform</title>
          <meta name="description" content="Enterprise-Grade Security Features" />
        </>
      ),
    },
  };
}
