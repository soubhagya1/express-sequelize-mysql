const db = require("../models");
const Demo = db.demo;
const Op = db.Sequelize.Op;

// Create and Save a new Demo
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const demo = {
        title: req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    };

    Demo.create(demo).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while creating the Demo."
        });
    })
};

exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
    Demo.findAll({ where: condition }).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving demos."
        });
    });
}

exports.findOne = (req, res) => {
    const id = req.params.id;
    Demo.findByPk(id).then(data => {
        if (data) {
            res.send(data);
        } else {
            res.status(404).send({ message: `Cannot find Demo with id=${id}.` });
        }
    }).catch(err => {
        res.status(500).send({
            message: "Error retrieving Demo with id=" + id
        });
    });
}

exports.update = (req, res) => {
    const id = req.params.id;
    console.log(id)
    Demo.update(req.body, {
        where: { id: id }
    }).then(num => {
        if (num == 1) {
            res.send({
                message: "Demo was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update Demo with id=${id}. Maybe Demo was not found or req.body is empty!`
            });
        }
    }).catch(err => {
        res.status(500).send({
            message: "Error updating Demo with id=" + id
        });
    });
}

exports.delete = (req, res) => {
    Demo.destroy({
        where: { id: req.params.id }
    }).then(num => {
        if (num == 1) {
            res.send({
                message: "Demo was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete Demo with id=${id}. Maybe Demo was not found!`
            });
        }
    }).catch(err => {
        res.status(500).send({
            message: "Could not delete Demo with id=" + id
        });
    })
}

exports.deleteAll = (req, res) => {
    Demo.destroy({
        where: {},
        truncate: false
    }).then(nums => {
        res.send({ message: `${nums} Demo were deleted successfully!` });
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while removing all demos."
        });
    });
}

exports.findAllPublished = (req, res) => {
    Demo.findAll({ where: { published: true } }).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving demos."
        });
    });
}
// {
//     "totalItems": 8,
//     "demos":[...],
//     "totalPages": 3,
//     "currentPage": 1
// }