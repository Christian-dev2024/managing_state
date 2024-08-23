import  React , { useState } from  'react' ; 
import { useTodo } from  '../contexts' ;


function  Todo_form ( ) { 
  // État pour gérer la valeur d'entrée pour la nouvelle tâche 
    const [todo, setTodo] = useState ( "" ); 
  // Accès à la fonction addTodo depuis le hook useTodo 
    const { addTodo } = useTodo (); 
  // Gestionnaire d'événements pour l'ajout d'une nouvelle tâche 
    const  add = ( e ) => { 
        e. PreventDefault(); 
        // Si l'entrée est vide, ne pas continuer 
        if (!todo) return ; 
        // Appeler la fonction addTodo pour ajouter une nouvelle tâche avec la valeur d'entrée actuelle 
        addTodo ({ todo, completed : false }); 
        // Effacer le champ de saisie après avoir ajouté la tâche 
        setTodo ( "" ); 
    }; 

    return ( 
    <form onSubmit={add} className="flex"> 
      {/* Champ de saisie pour saisir la nouvelle tâche */} 
        <input 
        type="text" 
        placeholder="Write Todo..." 
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5" 
        value={todo} 
        onChange={(e) => setTodo(e.target.value)} /> 
      {/* Bouton pour soumettre la nouvelle tâche */} 

    <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"> 
        Ajouter 
    </button> 
    </form> 
); 
} 
export default Todo_form;