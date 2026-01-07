export default function MapFilters({ search, setSearch, filter, setFilter }) {

  return (
    <section className="bg-gray-50 py-6 border-transparent border-b">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-4">

          {/* Search */}
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search lake by name or ID..."
            className="w-full px-4 py-3 rounded-lg border outline focus:ring-2 focus:ring-blue-500"
          />

          {/* Size Filter */}
          <select
            value={filter.size}
            onChange={(e) => setFilter({ ...filter, size: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Filter by Size</option>
            <option value="small">Small Lakes</option>
            <option value="medium">Medium Lakes</option>
            <option value="large">Large Lakes</option>
          </select>

          {/* Usage Filter */}
          <select
            value={filter.usage}
            onChange={(e) => setFilter({ ...filter, usage: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Filter by Usage</option>
            <option value="irrigation">Irrigation</option>
            <option value="drinking">Water Supply</option>
            <option value="recharge">Groundwater Recharge</option>
          </select>

        </div>

      </div>
    </section>
  );
}
