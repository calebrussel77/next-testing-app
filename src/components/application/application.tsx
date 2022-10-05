import Image from 'next/image';

export const Application = () => {
  return (
    <>
      <h1 aria-label="Job application form">Job application form</h1>
      <h2 aria-label="Section 1">Section 1</h2>
      <p>All fields are mandatory</p>
      <span title="close">X</span>
      <Image
        height={300}
        width={300}
        src="https://pbs.twimg.com/media/FTSsAGdXoAA_o5t.jpg"
        quality={100}
        alt="a person with a laptop"
      />
      <div data-testid="custom-element">Custom HTML element</div>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Fullname"
            value="Vishwas"
            onChange={() => {
              console.log('salut');
            }}
          />
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <textarea id="bio" />
        </div>
        <div>
          <label htmlFor="job-location">Job location</label>
          <select id="job-location">
            <option value="">Select a country</option>
            <option value="US">United States</option>
            <option value="GB">United Kingdom</option>
            <option value="CA">Canada</option>
            <option value="IN">India</option>
            <option value="AU">Australia</option>
          </select>
        </div>
        <div>
          <label>
            <input type="checkbox" id="terms" /> I agree to the terms and
            conditions
          </label>
        </div>
        <button disabled>Submit</button>
      </form>
    </>
  );
};
