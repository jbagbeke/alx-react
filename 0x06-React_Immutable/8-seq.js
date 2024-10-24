import { Seq } from 'immutable'

export default function printBestStudents(obj) {
    const studentSeq = Seq(obj)
    .filter((student) => student.score >= 70)
    .map((std) => ({
        score: std.score,
        firstName: std.firstName.charAt(0).toUpperCase() + std.firstName.slice(1),
        lastName: std.lastName.charAt(0).toUpperCase() + std.lastName.slice(1)
    }))

    console.log(studentSeq.toObject())
}


const grades = {
    1: {
      score: 99,
      firstName: 'guillaume',
      lastName: 'salva',
    }
  };
printBestStudents(grades)

