using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ContosoUniversity.Models
{    
    public class Instructor
    {
        public int ID { get; set; }

        [Required]
        [Display(Name = "Last Name")]
        [StringLength(50)]
        public string LastName { get; set; }

        [Required]
        [Column("FirstName")]
        [Display( Name = "First Name" )]
        [StringLength(50)]
        public string FirstMidName { get; set; }

        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString= "{0:yyyy-MM-dd}", ApplyFormatInEditMode=true)]
        [Display( Name = "Hire Date" )]
        public DateTime HireDate { get; set; }

        public string FullName { 
            
            get
            {
                return FirstMidName + ", " + LastName;
            }             
        }

        public OfficeAssignment OfficeAssignment { get; set; }     
        public ICollection<CourseAssignment> CourseAssignments { get; set; }          
    }
}
