exports.question = function (req, res) {
  res.render('quizes/question', {pregunta: "¿Cual es la capital de Italia?"})
}

exports.answer = function (req, res) {
  if (req.query.respuesta.toLowerCase() === "roma") {
    res.render('quizes/answer', {respuesta: "Correcto"})
  } else {
    res.render('quizes/answer', {respuesta: "Incorrecto"})
  }
}
