const CreateJobComponent = () => {
  return (
    <div className="max-w-2xl max-auto p-6 shadow-lg border-r-2">
      <form className="space-x-4">
        <div>
          <label className="text-sm font-medium ">Title</label>
          <input
            type="text"
            className="w-full border border-black rounded px-2 py-2 "
            required
          ></input>
        </div>
        <div>
          <label className="text-sm font-medium ">Department</label>
          <input
            type="text"
            className="w-full border border-black rounded px-2 py-2 "
            required
          ></input>
        </div>
        <div>
          <label className="text-sm font-medium ">Location</label>
          <input
            type="text"
            className="w-full border border-black rounded px-2 py-2 "
            required
          ></input>
        </div>
        <div>
          <label className="text-sm font-medium ">Status</label>
          <select className="w-full px-3 py-2 border rounded">
            <option value="Open">Open</option>
            <option value="InReview">InReview</option>
            <option value="Closed">Closed</option>
          </select>
        </div>
        <div>
          <label className="text-sm font-medium ">HeadCount</label>
          <input
            type="number"
            className="w-full border rounded px-2 py-2 mb-2"
            required
            min="1"
          ></input>
        </div>
        <div>
          <label className="block text-sm font-medum ">
            <textarea
              className="w-full px-3 py-2 border rounded"
              rows={4}
              required
            ></textarea>
            Descriptions
          </label>
        </div>
        <div>
          <label className="block text-sm font-medum mb-2 ">
            <textarea
              className="w-full px-3 py-2 border rounded"
              rows={4}
              required
            ></textarea>
            Requirements
          </label>
        </div>
        <button type="submit" className="w-full border rounded bg-blue-500 text-white py-2 px-2">Submit</button>
      </form>
    </div>
  );
};

export default CreateJobComponent;
