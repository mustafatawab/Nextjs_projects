export default function ProfileAbout() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-card p-6 rounded-lg border border-border">
        <h3 className="text-lg font-semibold mb-4">About</h3>
        <p className="text-muted-foreground leading-relaxed">
          Passionate software developer with 5+ years of experience in building web applications. I love creating
          intuitive user interfaces and solving complex problems with clean, efficient code. When I am not coding, you
          can find me exploring new technologies, reading tech blogs, or hiking in nature.
        </p>
      </div>

      <div className="bg-card p-6 rounded-lg border border-border">
        <h3 className="text-lg font-semibold mb-4">Details</h3>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Email</span>
            <span className="text-foreground">johndoe@example.com</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Phone</span>
            <span className="text-foreground">+1 (555) 123-4567</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Location</span>
            <span className="text-foreground">San Francisco, CA</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Website</span>
            <span className="text-foreground">johndoe.dev</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Birthday</span>
            <span className="text-foreground">January 15, 1990</span>
          </div>
        </div>
      </div>

      <div className="bg-card p-6 rounded-lg border border-border">
        <h3 className="text-lg font-semibold mb-4">Work & Education</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-foreground">Senior Frontend Developer</h4>
            <p className="text-sm text-muted-foreground">TechCorp Inc. • 2021 - Present</p>
          </div>
          <div>
            <h4 className="font-medium text-foreground">Frontend Developer</h4>
            <p className="text-sm text-muted-foreground">StartupXYZ • 2019 - 2021</p>
          </div>
          <div>
            <h4 className="font-medium text-foreground">Computer Science, B.S.</h4>
            <p className="text-sm text-muted-foreground">University of California • 2015 - 2019</p>
          </div>
        </div>
      </div>

      <div className="bg-card p-6 rounded-lg border border-border">
        <h3 className="text-lg font-semibold mb-4">Skills & Interests</h3>
        <div className="space-y-3">
          <div>
            <h4 className="font-medium text-foreground mb-2">Technical Skills</h4>
            <div className="flex flex-wrap gap-2">
              {["React", "TypeScript", "Node.js", "Python", "AWS", "Docker"].map((skill) => (
                <span key={skill} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-medium text-foreground mb-2">Interests</h4>
            <div className="flex flex-wrap gap-2">
              {["Photography", "Hiking", "Music", "Travel", "Gaming"].map((interest) => (
                <span key={interest} className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
