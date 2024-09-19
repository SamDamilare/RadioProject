const BlogPageNav = () => {
  return (
    <div className="flex justify-end mx-[80px] gap-[5px] my-4">
      <button type="button" className="bg-[white] font-sm px-4 py-1 rounded-sm">
        Prev
      </button>
      <button className="w-[35px] bg-[#7653d7] text-white rounded-sm">1</button>
      <button className="w-[35px] bg-[white] text-dark rounded-sm">2</button>
      <button className="w-[35px] bg-[white] text-dark rounded-sm">3</button>
      <button className="w-[35px] bg-[white] text-dark rounded-sm">4</button>
      <button type="button" className="bg-[white] font-sm px-4 py-1 rounded-sm">
        Next
      </button>
    </div>
  );
};

export default BlogPageNav;
