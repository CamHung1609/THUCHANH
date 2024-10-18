const getContactPage = (req, res) => {
  res.render("layout/main", {
    data: {
      title: "Contact Page",
      page: "contact",
    },
  });
};

export { getContactPage };
