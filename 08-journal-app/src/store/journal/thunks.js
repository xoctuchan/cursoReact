import { async } from "@firebase/util";
import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseBD } from "../../firebase/config";
import { fileUpload } from "../../helpers/fileUpload";
import { loadNotes } from "../../helpers/loadNotes";
import { addNewEmptyNote, deleteNoteById, savingNewNote, setActiveNote, setNotes, setPhotosToActiveNote, setSaving, updateNote } from "./journalSlice";

export const startNewNote = () =>{
    return async(dispatch, getState)=>{
        const { uid } = getState().auth;
        const newNote = {
            title: '',
            body: '',
            messageSaved:'',
            date: new Date().getTime(),
            imageUrls: []
        }
        dispatch ( savingNewNote());
        const newDoc = doc( collection( FirebaseBD, `${ uid }/journal/notes`) );
        const setDocResp = await setDoc( newDoc, newNote );

        newNote.id = newDoc.id;

        dispatch (addNewEmptyNote( newNote));
        dispatch ( setActiveNote( newNote ) )
        console.log(setDocResp);
    }
}

export const startLoadingNotes = () => {
    return async (dispatch, getState) =>{
        const { uid } = getState().auth;
        if (!uid) throw new Error ('El UID del usuario no existe');
        const notes = await loadNotes(uid);
        dispatch( setNotes(notes) );
    }
}

export const startSaveNote= ()=>{
    return async(dispatch, getState)=>{
        dispatch (setSaving());
        const { uid } = getState().auth;
        const { active:note } = getState().journal;
        const noteToFireStore = {...note};
        delete noteToFireStore.id;
        const docRef = doc(FirebaseBD, `${uid}/journal/notes/${note.id}`);
        await setDoc(docRef, noteToFireStore, { merge: true });
        dispatch(updateNote(note));

    }
}

export const startUploadingFiles = ( files = [] ) => {
    return async( dispatch ) => {
        dispatch( setSaving() );
        const fileUploadPromises = [];
        for ( const file of files ) {
            fileUploadPromises.push( fileUpload( file ) )
        }
        const photosUrls = await Promise.all( fileUploadPromises );
        dispatch( setPhotosToActiveNote( photosUrls ));
    }
}

export const startDeletingNote = ()=>{
    return async(dispatch, getState) =>{
        const { uid } = getState().auth;
        const { active: activeNote } = getState().journal;

        const docRef = doc( FirebaseBD, `${uid}/journal/notes/${activeNote.id}`);
        const resp = await deleteDoc( docRef );

        dispatch ( deleteNoteById(activeNote.id));
        console.log(uid, activeNote)
    }
}