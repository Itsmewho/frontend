/** @format */
const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;
// fetch all shoots

async function fetchShoots() {
  try {
    // handle whre domain is not  availible yet:
    if (!apiDomain) {
      return [];
    }
    const res = await fetch(`${apiDomain}/shoots`);
    if (!res.ok) {
      throw new Error('failed to get the data');
    }
    return res.json();
  } catch (error) {
    console.log('Server not working 01');
    return [];
  }
}

// fetch single shoot

async function fetchShoot(id) {
  try {
    // handle where id is not availible yet:
    if (!apiDomain) {
      return null;
    }
    const res = await fetch(`${apiDomain}/shoots/${id}`);


    if (!res.ok) {
      throw new Error('failed to get the data');
    }


    return res.json();

    
  } catch (error) {
    console.log('Server not working 02');
    return null;
  }
}

export { fetchShoots, fetchShoot };
