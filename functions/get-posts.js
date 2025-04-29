exports.handler = async (event) => {
  const response = await fetch('https://api.beehiiv.com/v2/publications/pub_49a33715-255e-47d6-9a81-eb1b79f60f36/posts', {
    headers: {
      'Authorization': 'Bearer L49zwlDUjwSqF4PWIIPkCxUauGqtbkD3d2SKJz6XSoQCh6PjEOKo9mPQEowylak3'
    }
  });

  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data)
  };
};

