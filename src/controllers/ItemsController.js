import items from "../models/item.js";

class ItemsController {

    static async listAll(req, res) {
        try {
            const itemsList = await items.find();
            res.status(200).json(itemsList);
        } catch (error) {
            res.status(500).json({ message: `[ Error ] Falha ao listar livros: ${error.message}` });
        }
    };

    static async searchById(req, res) {
        try {
          const id = req.params.id;
          const item = await items.findById(id);
          if(!item.length) res.status(404).json({ message: `Item não encontrado com ID ${id}.` });
          else res.status(200).json(item);
        } catch (error) {
            res.status(500).json({ message: `[ Error ] Falha ao buscar item: ${error.message}` });
        }
    };
    
    static async create(req, res) {
        try {
            const newItem = await items.insert(req.body);
            res.status(201).json({ newItem });
        } catch (error) {
            res.status(500).json({ message: `[ Error ] Falha ao cadastrar novo item: ${error.message}` });
        }
    }

    static async update(req, res) {
        try {
            const item = await items.findById(req.params.id);
            if( item.length === 0 ) {
                res.status(404).json({ message: "Item not found." });
            } else {
                const updatedItem = await items.findByIdAndUpdate(req.params.id, req.body);
                res.status(200).json({ updatedItem });
            }
        } catch (error) {
            res.status(500).json({ message: `[ Error ] Falha ao editar item: ${error.message}` });
        }
    };
    
    static async remove(req, res) {
        try {
            await items.findByIdAndDelete(req.params.id);
            res.status(204).json({});
        } catch (error) {
            res.status(500).json({ message: `[ Error ] Falha ao remover item: ${error.message}` });
        }
    };
    
}

export default ItemsController;