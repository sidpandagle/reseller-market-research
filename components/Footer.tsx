'use client'
import React, { useState } from "react";
import RequestSample from '@/components/RequestSample'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Link from "next/link";
import Privacy from "@/components/Privacy";
import Terms from "@/components/Terms";
import PlaceAnOrder from "@/components/PlaceAnOrder";



const Footer = () => {

  const detailsList = [
    {
      id: 1,
      title: 'Place An Order',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident a, tenetur molestiae eligendi eius blanditiis tempore adipisci odio quam quidem illum sed eaque. Fugit nam, repellat accusamus voluptatibus maiores voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident a, tenetur molestiae eligendi eius blanditiis tempore adipisci odio quam quidem illum sed eaque. Fugit nam, repellat accusamus voluptatibus maiores voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident a, tenetur molestiae eligendi eius blanditiis tempore adipisci odio quam quidem illum sed eaque. Fugit nam, repellat accusamus voluptatibus maiores voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident a, tenetur molestiae eligendi eius blanditiis tempore adipisci odio quam quidem illum sed eaque. Fugit nam, repellat accusamus voluptatibus maiores voluptates.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident a, tenetur molestiae eligendi eius blanditiis tempore adipisci odio quam quidem illum sed eaque. Fugit nam, repellat accusamus voluptatibus maiores voluptates.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident a, tenetur molestiae eligendi eius blanditiis tempore adipisci odio quam quidem illum sed eaque. Fugit nam, repellat accusamus voluptatibus maiores voluptates.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident a, tenetur molestiae eligendi eius blanditiis tempore adipisci odio quam quidem illum sed eaque. Fugit nam, repellat accusamus voluptatibus maiores voluptates.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident a, tenetur molestiae eligendi eius blanditiis tempore adipisci odio quam quidem illum sed eaque. Fugit nam, repellat accusamus voluptatibus maiores voluptates.'
    },
    {
      id: 2,
      title: 'Privacy',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident a, tenetur molestiae eligendi eius blanditiis tempore adipisci odio quam quidem illum sed eaque. Fugit nam, repellat accusamus voluptatibus maiores voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident a, tenetur molestiae eligendi eius blanditiis tempore adipisci odio quam quidem illum sed eaque. Fugit nam, repellat accusamus voluptatibus maiores voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident a, tenetur molestiae eligendi eius blanditiis tempore adipisci odio quam quidem illum sed eaque. Fugit nam, repellat accusamus voluptatibus maiores voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident a, tenetur molestiae eligendi eius blanditiis tempore adipisci odio quam quidem illum sed eaque. Fugit nam, repellat accusamus voluptatibus maiores voluptates.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident a, tenetur molestiae eligendi eius blanditiis tempore adipisci odio quam quidem illum sed eaque. Fugit nam, repellat accusamus voluptatibus maiores voluptates.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident a, tenetur molestiae eligendi eius blanditiis tempore adipisci odio quam quidem illum sed eaque. Fugit nam, repellat accusamus voluptatibus maiores voluptates.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident a, tenetur molestiae eligendi eius blanditiis tempore adipisci odio quam quidem illum sed eaque. Fugit nam, repellat accusamus voluptatibus maiores voluptates.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident a, tenetur molestiae eligendi eius blanditiis tempore adipisci odio quam quidem illum sed eaque. Fugit nam, repellat accusamus voluptatibus maiores voluptates.'
    },
    {
      id: 3,
      title: 'Terms and Conditions',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident a, tenetur molestiae eligendi eius blanditiis tempore adipisci odio quam quidem illum sed eaque. Fugit nam, repellat accusamus voluptatibus maiores voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident a, tenetur molestiae eligendi eius blanditiis tempore adipisci odio quam quidem illum sed eaque. Fugit nam, repellat accusamus voluptatibus maiores voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident a, tenetur molestiae eligendi eius blanditiis tempore adipisci odio quam quidem illum sed eaque. Fugit nam, repellat accusamus voluptatibus maiores voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident a, tenetur molestiae eligendi eius blanditiis tempore adipisci odio quam quidem illum sed eaque. Fugit nam, repellat accusamus voluptatibus maiores voluptates.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident a, tenetur molestiae eligendi eius blanditiis tempore adipisci odio quam quidem illum sed eaque. Fugit nam, repellat accusamus voluptatibus maiores voluptates.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident a, tenetur molestiae eligendi eius blanditiis tempore adipisci odio quam quidem illum sed eaque. Fugit nam, repellat accusamus voluptatibus maiores voluptates.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident a, tenetur molestiae eligendi eius blanditiis tempore adipisci odio quam quidem illum sed eaque. Fugit nam, repellat accusamus voluptatibus maiores voluptates.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident a, tenetur molestiae eligendi eius blanditiis tempore adipisci odio quam quidem illum sed eaque. Fugit nam, repellat accusamus voluptatibus maiores voluptates.'
    },
  ]

  const [formOpen, setFormOpen] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [details, setDetails] = useState(detailsList[0]);
  const [email, setEmail] = useState('');
  const handleFormOpen = () => setFormOpen(true);
  const handleFormClose = () => { setFormOpen(false); setEmail('') };
  const handleDetailsOpen = (title: any) => {
    setDetails(detailsList.find(r => r.title === title) as typeof details)
    setDetailsOpen(true)
  };
  const handleDetailsClose = () => setDetailsOpen(false);

  return (
    <div>
      <div className="relative text-center text-white bg-o1 md:text-left">
        {/* <img loading="lazy" src={"/assets/footer-guy.png"} alt="working-guy" className="absolute hidden md:block bottom-0 right-10 h-[420px] transform -scale-x-100" /> */}
        <img loading="lazy" src={"/assets/reseller/c3.webp"} alt="working-guy" className="rounded-md absolute hidden md:block bottom-4 right-20 h-[280px]" />
        {/* <img loading="lazy" src={"/assets/f3.png"} alt="working-guy" className="absolute hidden md:block bottom-10 right-20 h-[360px] transform" /> */}
        <div className="md:flex">
          <div className="md:w-1/2">
            <div className="flex flex-col items-center gap-4 p-8 border-white md:items-start md:px-12 md:py-16 md:flex-row">
              <div className="flex font-bold md:w-1/2">
                <Link href='/' className="flex items-center justify-center h-20 p-4 bg-white rounded-md">
                  <img loading="lazy" src={'/assets/reseller/reseller_logo_rect1.png'} alt="logo" className="flex justify-center"></img>
                </Link>
              </div>
              {/* <div className="w-3/5 text-sm md:text-justify">Harvesting market intelligence to sow success, cultivating strategies for growth in dynamic landscapes. Your compass in the evolving business terrain.</div> */}
              <div className="text-2xl leading-relaxed md:w-1/2 ">Decision With <br /> Precision</div>
            </div>
            <div className="flex flex-col gap-4 p-8 text-sm border-t border-white md:gap-36 md:flex-row md:px-12 md:py-16">
              {/* <div>
                <div className="mb-4 text-xl font-bold">Resources</div>
                <div className="mb-2">Why Research Envision?</div>
                <div className="mb-2">Customer Service</div>
                <div className="mb-2">Blogs</div>
                <div className="mb-2">Guides</div>
                <div className="mb-2">Webinars</div>
                <div className="mb-2">Workplace Mgmt</div>
                <div className="mb-2">Glossary</div>
              </div> */}
              <div>
                <div className="mb-4 text-xl font-bold">Company</div>
                <Link href='/about'>
                  <div className="mb-2">About Us</div>
                </Link>
                <Link href='/career'>
                  <div className="mb-2">Careers</div>
                </Link>
                <Link href='/contact'>
                  <div className="mb-2">Contact Us</div>
                </Link>
                <Link href='/press-releases/all-industries'>
                  <div className="mb-2">Press Release</div>
                </Link>
              </div>

              <div>
                <div className="mb-4 text-xl font-bold">Connect</div>
                <div className="mb-2">
                  <a href="https://www.facebook.com/profile.php?id=61553676880810" target="_blank">
                    Facebook
                  </a>
                </div>
                <div className="mb-2">
                  <a href="https://www.linkedin.com/company/congruence-market-insights/" target="_blank">
                    LinkedIn
                  </a>
                </div>
                <div className="mb-2">
                  <a href="https://www.youtube.com/@researchenvision" target="_blank">
                    YouTube
                  </a>
                </div>
                {/* <div className="mb-2">Instagram</div>
                <div className="mb-2">YouTube</div> */}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 p-8 border-t border-white md:border-t-0 md:border-l md:w-1/2 md:px-12 md:py-16">
            <div className="flex flex-col gap-3 text-3xl text-white md:text-3xl ">
              <div>
                Have any custom research requirements?
              </div>
            </div>
            <div className="flex items-center justify-between mt-4 text-black bg-white rounded-full md:mt-8 md:w-3/4">
              <input className="w-full p-2 ml-3 outline-0" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email..." />
              {/* <div onClick={handleFormOpen} className="p-4 md:p-4 rounded-full bg-[#6f32be] hover:bg-[#763dc0] scale-110"> */}
              <div onClick={handleFormOpen} className="p-4 scale-110 rounded-full md:p-4 bg-b2 hover:bg-b1">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-right" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l14 0" />
                  <path d="M15 16l4 -4" />
                  <path d="M15 8l4 4" />
                </svg>

              </div>
            </div>
            <div className="flex justify-end ">
              <img loading="lazy" src={"/assets/others/footer payment image.png"} alt="secure-payment" className="hidden md:block w-[400px]" />
            </div>
          </div>
        </div>
        <div className="text-sm border-t border-white cursor-default">
          <div className="px-12 py-8 text-justify md:w-3/5">Research Envision, a leading market research firm, is committed to delivering unmatched insights and strategic intelligence. Our adept analysts provide actionable data, enabling businesses to make informed decisions in today's dynamic marketplace. Trust us for navigating your journey to success.</div>
          <div className="flex flex-col gap-8 px-12 py-8 md:flex-row md:items-end">
            <div>© 2024 Research Envision</div>
            {detailsList.map((r, i) => {
              return <div className="cursor-pointer" key={i} onClick={() => handleDetailsOpen(r.title)}>{r.title}</div>
            })}
          </div>
        </div>
      </div>
      <Modal
        open={formOpen}
        onClose={handleFormClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <div className='flex items-center justify-center'>
            <div className=' m-2 p-4 md:p-6 w-[350px] md:w-[700px] rounded-md bg-white'>
              <div className="flex justify-between pb-2 mb-2 text-xl font-semibold text-center">
                <div>Custom Research Requirements</div>
                <svg height={24} width={24} onClick={handleFormClose} className="cursor-pointer" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM8.96963 8.96965C9.26252 8.67676 9.73739 8.67676 10.0303 8.96965L12 10.9393L13.9696 8.96967C14.2625 8.67678 14.7374 8.67678 15.0303 8.96967C15.3232 9.26256 15.3232 9.73744 15.0303 10.0303L13.0606 12L15.0303 13.9696C15.3232 14.2625 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2625 15.3232 13.9696 15.0303L12 13.0607L10.0303 15.0303C9.73742 15.3232 9.26254 15.3232 8.96965 15.0303C8.67676 14.7374 8.67676 14.2625 8.96965 13.9697L10.9393 12L8.96963 10.0303C8.67673 9.73742 8.67673 9.26254 8.96963 8.96965Z" fill="#1C274C" /> </g></svg>
              </div>
              <div className="h-[82vh] overflow-auto text-sm md:text-md">
                <RequestSample reportTitle={'User'} enquiryType='Custom Research Requirements' closeModal={handleFormClose} />
              </div>
            </div>
          </div>
        </Box>
      </Modal>
      <Modal
        open={detailsOpen}
        onClose={handleDetailsClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <div className='flex items-center justify-center'>
            <div className=' m-2 p-2 md:p-6 w-[350px] md:w-[700px] rounded-md bg-white'>
              <div className="flex justify-between pb-2 mb-2 text-xl font-semibold text-center">
                <div>{details.title}</div>
                <svg height={24} width={24} onClick={handleDetailsClose} className="cursor-pointer" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM8.96963 8.96965C9.26252 8.67676 9.73739 8.67676 10.0303 8.96965L12 10.9393L13.9696 8.96967C14.2625 8.67678 14.7374 8.67678 15.0303 8.96967C15.3232 9.26256 15.3232 9.73744 15.0303 10.0303L13.0606 12L15.0303 13.9696C15.3232 14.2625 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2625 15.3232 13.9696 15.0303L12 13.0607L10.0303 15.0303C9.73742 15.3232 9.26254 15.3232 8.96965 15.0303C8.67676 14.7374 8.67676 14.2625 8.96965 13.9697L10.9393 12L8.96963 10.0303C8.67673 9.73742 8.67673 9.26254 8.96963 8.96965Z" fill="#1C274C" /> </g></svg>
              </div>
              <div className='h-[82vh] overflow-auto text-sm md:text-md'>
                {details.title === 'Place An Order' && <PlaceAnOrder />}
                {details.title === 'Privacy' && <Privacy />}
                {details.title === 'Terms and Conditions' && <Terms />}
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Footer;

