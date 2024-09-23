import React from 'react';
import Banner from '../components/Banner';

function TermOfUse() {
  return (
    <div className="overflow-x-hidden">
 
      <Banner img="/banner.jpg" className="w-full h-auto object-cover" />


      <div className="  text-left px-4 sm:px-6 md:px-8 lg:px-12 mt-10 py-10 max-w-screen-xl  mx-auto">
        
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-6 pb-2">
          Terms and Conditions
        </h1>

        {/* Introduction Section */}
        <div className="mb-10">
          <p className="font-sans text-zinc-500 text-sm sm:text-base lg:text-lg mb-4">
            Naturecallz by EightSphere LTD
          </p>
          <p className="font-sans text-zinc-500 text-sm sm:text-base lg:text-lg mb-4">
            These Terms and conditions ("Terms") are a legally binding contract between you, the user utilizing EightSphere LTD's Services and Technology (referenced below as "You" or the "User"), and EightSphere LTD (referenced below as “EightSphere LTD”, "us" or “we” or “Company”). EightSphere LTD is the legal owner of the Product and Technology, developed or otherwise licensed to us. These Terms constitute the terms and conditions under which the User is allowed to use EightSphere LTD's Services and Technology, including associated features.
          </p>
          <p className="font-sans text-zinc-500 text-sm sm:text-base lg:text-lg mb-4">
            By accessing this Website or using Services/Apps/Software accessible from EightSphere.com, you agree to be bound by these Website Terms and Conditions of Use and acknowledge that you are responsible for complying with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site or downloading and using the apps/services developed by the Company (“EightSphere LTD”). The materials contained in this Website are protected by copyright and trademark law.
          </p>
          <p className="font-sans text-zinc-500 text-sm sm:text-base lg:text-lg mb-4">
            Accepting the terms can be done in two ways:
          </p>
        </div>

        {/* Acceptance Methods */}
        <div className="mb-8">
          <ol className="list-decimal list-inside space-y-2 text-sm sm:text-base lg:text-lg pl-4 sm:pl-6">
            <li className="font-sans text-zinc-500">
              Accept by using the services. In this case, you agree and understand that the Company will consider it as your acceptance of these terms and conditions.
            </li>
            <li className="font-sans text-zinc-500">
              Accept by action – Click on an acceptance button/checkbox or similar function. In this case, you agree and understand that the Company will consider it as your acceptance of these terms and conditions.
            </li>
          </ol>
        </div>

        {/* Terms Sections */}
        <div className="space-y-8">
          {/* Section 1 */}
          <section>
 
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4 sm:mb-5 md:mb-6 pb-2">

              1. Naturecallz and Users Relationship
            </h2>
            <p className="font-sans text-zinc-500 text-sm sm:text-base lg:text-lg mb-4">
              Your use of EightSphere’s services is bound to these terms and conditions only, unless specified otherwise in an outer written agreement between you and the Company.
            </p>
            <p className="font-sans text-zinc-500 text-sm sm:text-base lg:text-lg mb-4">
              <a
                href="https://chromium.googlesource.com/chromium/src/+/master/LICENSE.admin@naturecallz.com"
                className="text-blue-600 underline break-words"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://chromium.googlesource.com/chromium/src/+/master/LICENSE
              </a>
            </p>
            <p className="font-sans text-zinc-500 text-sm sm:text-base lg:text-lg mb-4">
              By reading these terms, you agree to be bound by any third-party open-source software we might use in our products. EightSphere disclaims any/all liability to you or any third party related to such open-source software.
            </p>
            <p className="font-sans text-zinc-500 text-sm sm:text-base lg:text-lg mb-4">
              While using our services through the Internet, you are aware you might encounter the following:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-sm sm:text-base lg:text-lg pl-4 sm:pl-6">
              <li className="font-sans text-zinc-500">Viruses</li>
              <li className="font-sans text-zinc-500">Worms</li>
              <li className="font-sans text-zinc-500">Hacking</li>
              <li className="font-sans text-zinc-500">Ransom hacking</li>
              <li className="font-sans text-zinc-500">Trojan horses</li>
              <li className="font-sans text-zinc-500">Or any technological harassment</li>
            </ol>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="font-bold text-xl sm:text-2xl lg:text-3xl text-gray-800 mb-4">
              1.1 Using EightSphere’s Services
            </h2>
            <p className="font-sans text-zinc-500 text-sm sm:text-base lg:text-lg mb-4">
              You are not allowed to interfere with the Company's services from working properly.
            </p>
            <p className="font-sans text-zinc-500 text-sm sm:text-base lg:text-lg mb-4">
              Your use of EightSphere’s services will be limited solely to the purposes mentioned in these terms and conditions.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="font-bold text-xl sm:text-2xl lg:text-3xl text-gray-800 mb-4">
              2. Use License
            </h2>
            <p className="font-sans text-zinc-500 text-sm sm:text-base lg:text-lg mb-4">
              Permission is granted to temporarily download one copy of the materials on EightSphere.com website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <p className="font-sans text-zinc-500 text-sm sm:text-base lg:text-lg mb-4">
              modify or copy the materials; use the materials for any commercial purpose or for any public display; attempt to reverse engineer any software contained on EightSphere LTD's Website; remove any copyright or other proprietary notations from the materials; or transfer the materials to another person or "mirror" the materials on any other server.
            </p>
            <p className="font-sans text-zinc-500 text-sm sm:text-base lg:text-lg mb-4">
              This will let EightSphere LTD terminate upon violations of any of these restrictions. Upon termination, your viewing right will also be terminated, and you should destroy any downloaded materials in your possession whether in printed or electronic format.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="font-bold text-xl sm:text-2xl lg:text-3xl text-gray-800 mb-4">
              3. Disclaimer
            </h2>
            <p className="font-sans text-zinc-500 text-sm sm:text-base lg:text-lg mb-4">
              All the materials on EightSphere LTD’s (“the Company”) Website/Services are provided "as is". EightSphere LTD makes no warranties, whether expressed or implied, therefore negates all other warranties. Furthermore, EightSphere LTD does not make any representations concerning the accuracy or reliability of the use of the materials on its Website or otherwise relating to such materials or any sites linked to this Website.
            </p>
            <p className="font-sans text-zinc-500 text-sm sm:text-base lg:text-lg mb-4">
              The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service, including all implied warranties of merchantability, fitness for a particular purpose, title, and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage, or trade practice. Without limitation to the foregoing, the Company provides no warranty or undertaking and makes no representation of any kind that the Service will meet Your requirements, achieve any intended results, be compatible or work with any other software, applications, systems, or services, operate without interruption, meet any performance or reliability standards, or be error-free or that any errors or defects can or will be corrected.
            </p>
            <p className="font-sans text-zinc-500 text-sm sm:text-base lg:text-lg mb-4">
              Without limiting the foregoing, neither the Company nor any of the company's providers makes any representation or warranty of any kind, express or implied: (i) as to the operation or availability of the Service, or the information, content, materials, or products included thereon; (ii) that the Service will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information or content provided through the Service; or (iv) that the Service, its servers, the content, or emails sent from or on behalf of the Company are free of viruses, scripts, trojan horses, worms, malware, timebombs, or other harmful components.
            </p>
            <p className="font-sans text-zinc-500 text-sm sm:text-base lg:text-lg mb-4">
              Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to You. But in such a case, the exclusions and limitations set forth in this section shall be applied to the greatest extent enforceable under applicable law.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="font-bold text-xl sm:text-2xl lg:text-3xl text-gray-800 mb-4">
              4. Limitations
            </h2>
            <p className="font-sans text-zinc-500 text-sm sm:text-base lg:text-lg mb-4">
              EightSphere LTD or its suppliers will not be held accountable for any damages that may arise from the use or inability to use the materials on EightSphere LTD’s Website/Services, even if EightSphere LTD or an authorized representative of this Website/Services has been notified, orally or in writing, of the possibility of such damage. Some jurisdictions do not allow limitations on implied warranties or limitations of liability for incidental damages; these limitations may not apply to you.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="font-bold text-xl sm:text-2xl lg:text-3xl text-gray-800 mb-4">
              5. Revisions and Errata
            </h2>
            <p className="font-sans text-zinc-500 text-sm sm:text-base lg:text-lg mb-4">
              The materials appearing on EightSphere LTD’s Website may include technical, typographical, or photographic errors. EightSphere LTD does not promise that any of the materials on this Website are accurate, complete, or current. EightSphere LTD may change the materials contained on its Website at any time without notice. EightSphere LTD does not make any commitment to update the materials.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="font-bold text-xl sm:text-2xl lg:text-3xl text-gray-800 mb-4">
              6. Links
            </h2>
            <p className="font-sans text-zinc-500 text-sm sm:text-base lg:text-lg mb-4">
              EightSphere LTD has not reviewed all of the sites linked to its Website and is not responsible for the contents of any such linked site. The presence of any link does not imply endorsement by EightSphere LTD of the site. The use of any linked website is at the user’s own risk.
            </p>
            <h2 className="font-bold text-xl sm:text-2xl lg:text-3xl text-gray-800 mb-4">
              7. Site Terms of Use EightSphere LTD
            </h2>
            <p className="font-sans text-zinc-500 text-sm sm:text-base lg:text-lg mb-4">
              EightSphere LTD may revise these Terms of Use for its Website/Services at any time without prior notice. By using this Website and Services, you agree to be bound by the current version of these Terms and Conditions of Use.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="font-bold text-xl sm:text-2xl lg:text-3xl text-gray-800 mb-4">
              8. Your Privacy
            </h2>
            <p className="font-sans text-zinc-500 text-sm sm:text-base lg:text-lg mb-4">
              The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.
            </p>
            <p className="font-sans text-zinc-500 text-sm sm:text-base lg:text-lg mb-4">
              Please read our{' '}
              <a href="https://www.naturecallz.com/privacy-policy" className="text-blue-600 underline break-words">
                Privacy Policy.
              </a>
            </p>
            <p className="font-sans text-zinc-500 text-sm sm:text-base lg:text-lg mb-4">
              By reading the Privacy Policy, you agree to the use of your data.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="font-bold text-xl sm:text-2xl lg:text-3xl text-gray-800 mb-4">
              9. Governing Law
            </h2>
            <p className="font-sans text-zinc-500 text-sm sm:text-base lg:text-lg mb-4">
              Any claim related to EightSphere LTD's Website/Services shall be governed by the laws of the State of Israel without regard to its conflict of law provisions.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="font-bold text-xl sm:text-2xl lg:text-3xl text-gray-800 mb-4">
              10. European Users
            </h2>
            <p className="font-sans text-zinc-500 text-sm sm:text-base lg:text-lg mb-4">
              EightSphere users in the European Union, by using all or any portion of the Services, understand, acknowledge, and agree to the processing of your personal information in the United States.
            </p>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="font-bold text-xl sm:text-2xl lg:text-3xl text-gray-800 mb-4">
              11. Contact Information
            </h2>
            <p className="font-sans text-zinc-500 text-sm sm:text-base lg:text-lg mb-4">
              You may contact us at{' '}
              <a href="mailto:admin@naturecallz.com" className="text-blue-600 underline break-words">
                admin@naturecallz.com
              </a>{' '}
              for any other questions or queries that may arise.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default TermOfUse;
