export default function Stats() {
  return (
    <div className="bg-dark py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-3 gap-8">
          <div className="text-center">
            <p className="text-primary text-4xl font-bold mb-2">+102</p>
            <p className="text-white">Clientes satisfechos</p>
          </div>
          <div className="text-center">
            <p className="text-primary text-4xl font-bold mb-2">+468</p>
            <p className="text-white">Resources exclusivos</p>
          </div>
          <div className="text-center">
            <p className="text-primary text-4xl font-bold mb-2">+5</p>
            <p className="text-white">Productos oficiales</p>
          </div>
        </div>
      </div>
    </div>
  );
}
